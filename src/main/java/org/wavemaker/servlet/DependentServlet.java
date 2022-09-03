package org.wavemaker.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.DependentDAO;
import org.wavemaker.implementation.DependentOperations;
import org.wavemaker.model.Dependent;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class DependentServlet extends HttpServlet {
    DependentOperations dependentManager=new DependentDAO();
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException, ServletException{
        List<Dependent> dependentList=dependentManager.getAllDependent();
        response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(dependentList));
    }
    @Override
    protected void doPost(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException{
        Dependent dependent=objectMapper.readValue(request.getReader(),Dependent.class);
        dependentManager.addDependent(dependent);
    }
    @Override
    protected  void doDelete(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException{
        dependentManager.deleteDependent(request.getParameter("userEmail"));
    }
}
