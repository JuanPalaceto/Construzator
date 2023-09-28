<?php
    require 'vendor/autoload.php';
            
    use PhpOffice\PhpSpreadsheet\IOFactory;
    use PhpOffice\PhpSpreadsheet\Spreadsheet;

    // Definir constantes para las urls
    define('BASE_PATH', '../assets/img/projects/');
    define('EXCEL_PATH', BASE_PATH . 'data.xlsx');

    // Recuperar el JSON
    $id = file_get_contents("php://input");

    if (!empty($id) && is_json($id)) {
        // Comprobar y deserializar el JSON
        $data = json_decode($id, true);
        // En 0 ya que sólo contiene el id
        $response = main($data['idProyecto']);
    }

    function main($proyecto) {
        $obj = obtenNombre(EXCEL_PATH, $proyecto);
        $obj->src = obtenSrc($proyecto);
        $obj->urls = obtenArrayImgs($proyecto);

        return $obj;
    }

    // Función para obtner al array de urls con las urls de las imagnees
    function obtenArrayImgs($proyecto) {
        $rutaProyecto = BASE_PATH . $proyecto;
        $arrayArchivos = escaneaCarpeta($rutaProyecto);

        $imagesUrl = [];

        foreach ($arrayArchivos as $archivo) {
            $urlImagen = $rutaProyecto . '/' . $archivo;
            if (is_file($urlImagen)) {
                $imagesUrl[] = $urlImagen;
            }
        }

        return $imagesUrl;
    }

    // Función para obtener la imagen principal
    function obtenSrc($proyecto) {
        $rutaCarpeta = BASE_PATH . $proyecto;
        $imgPrincipal = glob($rutaCarpeta . '/main.*');
        if (count($imgPrincipal) > 0) {
            return $imgPrincipal[0];
        }

        $arrayArchivos = obtenArrayImgs($proyecto);
        return ($arrayArchivos) ? reset($arrayArchivos) : null;
    }

    // Función para obtener las caracteristicas del objeto (Sólo nombre y ID en este caso)
    function obtenNombre($rutaExcel, $proyecto) {
        if (file_exists($rutaExcel)) {
            $spreadsheet = new Spreadsheet();
            $spreadsheet = IOFactory::load($rutaExcel);
            $worksheet = $spreadsheet->getActiveSheet();
            $obj = new stdClass();
        
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