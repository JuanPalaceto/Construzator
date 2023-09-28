<?php
    require 'vendor/autoload.php';
    
    use PhpOffice\PhpSpreadsheet\IOFactory;
    use PhpOffice\PhpSpreadsheet\Spreadsheet;

    /* Array de las imagenes */
    define('BASE_PATH', '../assets/img/projects/');
    define('EXCEL_PATH', BASE_PATH . 'data.xlsx');

    // Ejecutar la función principal
    $proyectos = generaGaleria(BASE_PATH);

    function generaGaleria($rutaPrincipal) {
        if (!is_dir($rutaPrincipal)) {
            return null; // Hay que capturar esto
        }

        $arrayProyectos = escaneaCarpeta($rutaPrincipal);
        $proyectos = [];

        foreach ($arrayProyectos as $proyecto) {
            $rutaCompleta = $rutaPrincipal . $proyecto;
            
            if (is_dir($rutaCompleta)) {
                // Traer el nombre y el precio de la propiedad
                $obj = leerExcel(EXCEL_PATH, $proyecto);
                // comprobar si existe una imagen main o usar la primer imagen de la carpeta
                if (count(glob($rutaCompleta . '/main.*')) > 0){
                    $main = glob($rutaCompleta . '/main.*');
                    $obj->src = $main[0];
                } else {
                    $imgs = escaneaCarpeta($rutaCompleta);
                    $primerImg = reset($imgs);
                    $obj->src = $rutaCompleta . '/' . $primerImg;
                }
                
                $proyectos[] = $obj;
            }
        }

        return $proyectos;
    }

    // Trae las propiedades necesarias para generar la agelría (nombre)
    function leerExcel ($rutaExcel, $proyecto) {
        if (file_exists($rutaExcel)) {
            $spreadsheet = new Spreadsheet();
            $spreadsheet = IOFactory::load($rutaExcel);
            $worksheet = $spreadsheet->getActiveSheet();
            $obj = new stdClass();
            $obj->id = $proyecto;
        
            foreach ($worksheet->getRowIterator() as $row) {
                $cell = $worksheet->getCell('A' . $row->getRowIndex());
                if ($cell->getValue() === $proyecto) {
                    $nombre = $worksheet->getCell('B' . $row->getRowIndex());
                    $obj->nombre = $nombre->getValue();
        
                    break;
                }
            }
        
            if (!isset($obj->nombre) || $obj->nombre === null || $obj->nombre === "") {
                $obj->nombre = $proyecto;
            }

            return $obj;
        }
    }

    // Obtener el array de la carpeta escaneada y elimina las carpetas . y .. de Linux
    function escaneaCarpeta($ruta) {
        if (!is_dir($ruta)) {
            return null; // Hay que capturar esto
        }

        $array = scandir($ruta);
        $array = array_diff($array, ['.', '..']);

        return $array;
    }

    // Convert $proyectos array to JSON
    $jsonResponse = json_encode($proyectos);
    header('Content-Type: application/json');
    echo $jsonResponse;
?>