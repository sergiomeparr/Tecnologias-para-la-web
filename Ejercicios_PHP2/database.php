<!-- Consulta de una base de datos y muestra de los resultados. --> 
<!DOCTYPE html> 
<html>  
	<head>   
		<meta charset = "utf-8">   
		<title>Resultados de la búsqueda</title>   
		<style type = "text/css">   
			body { 
				font-family: sans-serif;    
				background-color: lightyellow; 
			}    
			table { 
				background-color: lightblue;    
				border-collapse: collapse;    
				border: 1px solid gray; 
			}    
			td { 
				padding: 5px; 
			} 
			tr:nth-child(odd) {    
				background-color: white; 
			}   
		</style>  
	</head>  
	<body>   
		<?php    
			$select = $_POST["select"]; // crea la variable $select    
			// construí la consulta SELECT    
			$query = "SELECT " .$select. " FROM books";
			// Connect to MySQL    							//iw3htp
			if ( !( $database = mysqli_connect( "localhost", "root", "root" ) ) )     
				die( "No se pudo conectar a la base de datos </body></html>" );    
			// abre la base de datos Products    
			if ( !mysqli_select_db($database , "products") )     
			//if ( !mysql_select_db( "products", $database ) )     
				die( "No se pudo conectar a la base de datos </body></html>" );    
			// consulta a la base de datos Products    	
			if ( !( $result = mysqli_query($database , $query) ) ){     
			//if ( !( $result = mysql_query( $query, $database ) ) ){     
				print( "<p>No se pude ejecutar la consulta!</p>" );     
				die( mysqli_error($database) . "</body></html>" );    
			} // end if    mysql_close( $database );   
		?><!-- end PHP script -->   
		<table>    
			<caption>Resultados de "SELECT 
				<?php 
					print( "$select" ) 
				?>     
				FROM books"</caption>    
				<?php     
					// busca cada registro en conjunto de results     
					while( $row = mysqli_fetch_row( $result ) ){      
						// construye la tabla para mostrar los resultados      
						print( "<tr>" );      
						foreach ( $row as $key => $value )       
						print( "<td>$value</td>" );       
						print( "</tr>" );      
					} // end while    
				?><!-- end PHP script -->   
		</table>   
		<p>Su búsqueda terminó;    
			<?php 
				print( mysqli_num_rows( $result ) ) 
			?> results.</p>   
			<p>Por envíe sus comentarios a <a href = "mailto:deitel@deitel.com">    Deitel and Associates, Inc.</a></p> 
	</body> 
</html> 
 