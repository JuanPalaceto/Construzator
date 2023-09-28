<?php
    require 'vendor/autoload.php';
    
    use PhpOffice\PhpSpreadsheet\IOFactory;
    use PhpOffice\PhpSpreadsheet\Spreadsheet;

    /* Array de las imagenes */
    define('BASE_PATH', '../inmobiliaria/assets/img/Propiedades/');
    define('CASAS_PATH', BASE_PATH . 'Casas/');
    define('TERRENOS_PATH', BASE_PATH . 'Terrenos/');

    $propiedades = generaGaleria();

    function generaGaleria() {
        // Inicializar 2 arrays con las categorías
        $casas = obtenArrayImgs(CASAS_PATH);
        $terrenos = obtenArrayImgs(TERRENOS_PATH);

        $propiedades = new stdClass();

        $propiedades->Casas = $casas;
        $propiedades->Terrenos = $terrenos;

        return $propiedades;
    }

    // Función para obtner al array de urls con las urls de las imagnees
    function obtenArrayImgs($rutaTipo) {
        if (!is_dir($rutaTipo)) {
            return null; // Hay que capturar esto
        }

        $arrayProyectos = escaneaCarpeta($rutaTipo);
        $proyectos = [];

        foreach ($arrayProyectos as $proyecto) {
            $rutaCompleta = $rutaTipo . $proyecto;
            
            if (is_dir($rutaCompleta)) {
                // Traer el nombre y el precio de la propiedad
                $obj = leerExcel($rutaTipo, $proyecto);
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

    // Trae las propiedades necesarias para generar la agelría (nombre y precio)
    function leerExcel ($rutaTipo, $proyecto) {
        $rutaExcel = $rutaTipo . 'data.xlsx';

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

                    $precio = $worksheet->getCell('C' . $row->getRowIndex());
                    $obj->precio = $precio->getValue();
        
                    break;
                }
            }
        
            if (!isset($obj->nombre) || $obj->nombre === null || $obj->nombre === "") {
                $obj->nombre = $proyecto;
            }
            if (!isset($obj->precio) || $obj->precio === null) {
                $obj->precio = "";
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

    // convertir el array a JSON
    $jsonResponse = json_encode($propiedades);
    header('Content-Type: application/json');
    echo $jsonResponse;
?>