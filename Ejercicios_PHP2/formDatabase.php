<!-- Displaying the MailingList database. --> 
<!DOCTYPE html> 
<html>  
	<head>   
		<meta charset = "utf-8">   
		<title>Search Results</title>   
		<style type = "text/css">    
			table { background-color: lightblue;     
					border: 1px solid gray;     
					border-collapse: collapse; 
				}    
			th, td { padding: 5px; border: 1px solid gray; 
				}    
			tr:nth-child(even) { background-color: white; 
				}    
			tr:first-child { background-color: lightgreen; 
				}   
		</style>  
	</head>  
	<body>   
		<?php 
			// build SELECT query    
			$query = "SELECT * FROM contacts"; 
			// Connect to MySQL    
			if ( !( $database = mysqli_connect( "localhost", "root", "root" ) ) )     
				die( "<p>Could not connect to database</p></body></html>" );    
			// open MailingList database    
			if ( !mysqli_select_db( $database, "MailingList" ) )     
				die( "<p>Could not open MailingList database</p> </body></html>" ); 
			// query MailingList database    
			if ( !( $result = mysqli_query( $database, $query ) ) ){     
				print( "<p>Could not execute query!</p>" );     
				die( mysqli_error($database) . "</body></html>" );    
			} // end if   
		?><!-- end PHP script --> 
		<h1>Mailing List Contacts</h1>   
		<table>    
			<caption>Contacts stored in the database</caption>    
				<tr>     
					<th>Last Name</th>     
					<th>First Name</th>     
					<th>E-mail Address</th>     
					<th>Phone Number</th>     
					<th>Book</th>     
					<th>Operating System</th>    
				</tr>    
				<?php     // fetch each record in result set     
					for ( $counter = 0; $row = mysqli_fetch_row( $result ); ++$counter ){      // build table to display results 
						print( "<tr>" );      
						foreach ( $row as $key => $value )       
						print( "<td>$value</td>" );      
						print( "</tr>" );     
					} // end for     
					mysqli_close( $database );    
				?><!-- end PHP script -->   
		</table>  
	</body> 
</html> 
 