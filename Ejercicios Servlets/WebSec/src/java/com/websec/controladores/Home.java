package com.websec.controladores;

import java.io.IOException;
import javax.servlet.RequestDispatcher; 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Home extends HttpServlet  {     
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{         
        String msg = "Hola Mundo!";         
        request.setAttribute("msg", msg);          
        RequestDispatcher rd = request.getRequestDispatcher("/index.jsp");        
        rd.forward(request, response);     
    }     
} 
 