<?php
    require 'vendor/autoload.php';
        
    use PhpOffice\PhpSpreadsheet\IOFactory;
    use PhpOffice\PhpSpreadsheet\Spreadsheet;

    // Definir constantes para las urls
    define('BASE_PATH', '../inmobiliaria/assets/img/Propiedades/');
    define('CASAS_PATH', BASE_PATH . 'Casas/');
    define('TERRENOS_PATH', BASE_PATH . 'Terrenos/');

    // Recuperar el JSON
    $id = file_get_contents("php://input");

    if (!empty($id) && is_json($id)) {
        // Comprobar y deserializar el JSON
        $data = json_decode($id, true);
        
        $response = objImgs($data);
    }

    function objImgs($datos) {
        // Define la ruta segun el tipo de propiedad
        $rutaProyecto = ($datos['tipo'] === 1) ? CASAS_PATH . $datos['idProyecto'] : TERRENOS_PATH . $datos['idProyecto'];

        if (!is_dir($rutaProyecto)) {
            return null; // Hay que capturar esto
        }

        // Ejecutar las funciones para generar los objetos
        $obj = obtenPropiedades($datos['idProyecto'], $datos['tipo']);
        $obj->src = obtenSrc($rutaProyecto);
        $obj->urls = obtenArrayImgs($rutaProyecto);

        return $obj;
    }

    // Función para obtener la imagen principal
    function obtenSrc($rutaProyecto) {
        $imgPrincipal = glob($rutaProyecto . '/main.*');
        if (count($imgPrincipal) > 0) {
            return $imgPrincipal[0];
        }

        $arrayArchivos = obtenArrayImgs($rutaProyecto);
        return ($arrayArchivos) ? reset($arrayArchivos) : null;
    }

    // Función para el resto de propiedades
    function obtenPropiedades($idProyecto, $tipo) {
        $rutaExcel = ($tipo === 1) ? CASAS_PATH . 'data.xlsx' : TERRENOS_PATH . 'data.xlsx';

        if (!file_exists($rutaExcel)) {
            return null; // Atrapar esta condición
        }

        $obj = new stdClass();
        $encontrado = false;

        
        $spreadsheet = IOFactory::load($rutaExcel);
        $worksheet = $spreadsheet->getActiveSheet();

        // Iterate through the rows to find the ID
        foreach ($worksheet->getRowIterator() as $row) {
            $cell = $worksheet->getCell('A' . $row->getRowIndex());
                
            if ($cell->getValue() === $idProyecto) {
                // Celda nombre
                $nextCell = $worksheet->getCell('B' . $row->getRowIndex());
                if($nextCell->getValue() !== null) {
                    $obj->nombre = $nextCell->getValue();
                } else {
                    $obj->nombre = $idProyecto;
                }
                // Celda precio
                $nextCell = $worksheet->getCell('C' . $row->getRowIndex());
                $obj->precio = $nextCell->getValue();
                // Celda ubicación
                $nextCell = $worksheet->getCell('D' . $row->getRowIndex());
                $obj->ubicacion = $nextCell->getValue();
                // Celda lote
                $nextCell = $worksheet->getCell('E' . $row->getRowIndex());
                $obj->lote = $nextCell->getValue();

                if ($tipo === 1) {
                    // Celda construccion
                    $nextCell = $worksheet->getCell('F' . $row->getRowIndex());
                    $obj->construccion = $nextCell->getValue();
                    // Celda habitaciones
                    $nextCell = $worksheet->getCell('G' . $row->getRowIndex());
                    $obj->habitaciones = $nextCell->getValue();
                    // Celda baños
                    $nextCell = $worksheet->getCell('H' . $row->getRowIndex());
                    $obj->banos = $nextCell->getValue();
                    // Celda caracteristicas
                    $nextCell = $worksheet->getCell('I' . $row->getRowIndex());
                } else {
                    // Celda caracteristicas
                    $nextCell = $worksheet->getCell('F' . $row->getRowIndex());
                }

                // Caracteristicas
                $caracteristicas = $nextCell->getValue();
                $obj->caracteristicas = explode(',', $caracteristicas);

                // Exit the loop since we found the ID
                break;
            }
        }

        !(isset($obj->nombre)) ? $obj->nombre = $idProyecto : null;
        return $obj;
    }

    // Función para obtner al array de urls con las urls de las imagnees
    function obtenArrayImgs($rutaProyecto) {
        $arrayArchivos = scandir($rutaProyecto);
        $arrayArchivos = array_diff($arrayArchivos, ['.', '..']);

        $imagesUrl = [];
        foreach ($arrayArchivos as $archivo) {
            $urlImagen = $rutaProyecto . '/' . $archivo;
            if (is_file($urlImagen)) {
                $imagesUrl[] = $urlImagen;
            }
        }

        return $imagesUrl;
    }

    // Función para comprobar si un string es un JSON valido
    function is_json($string) {
        json_decode($string);
        return (json_last_error() == JSON_ERROR_NONE);
    }

    // Regresar los datos al cliente
    $jsonResponse = json_encode($response);
    header('Content-Type: application/json');
    echo $jsonResponse;
?>