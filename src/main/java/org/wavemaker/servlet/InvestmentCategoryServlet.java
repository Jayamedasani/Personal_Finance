package org.wavemaker.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.InvestmentCategoryDAO;
import org.wavemaker.implementation.InvestmentCategoryOperations;
import org.wavemaker.model.InvestmentCategory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class InvestmentCategoryServlet extends HttpServlet {
    private InvestmentCategoryOperations investmentCategoryManager=new InvestmentCategoryDAO();
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException, ServletException{
        List<InvestmentCategory> investmentCategoryList=investmentCategoryManager.getAllInvestmentCategory();
        response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(investmentCategoryList));
    }
    @Override
    protected void doPost(HttpServletRequest request,HttpServletResponse response)throws IOException, ServletException{
        InvestmentCategory investmentCategory=objectMapper.readValue(request.getReader(),InvestmentCategory.class);
        investmentCategoryManager.addInvestmentCategory(investmentCategory.getName());
    }
    @Override
    protected void doDelete(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException{
        InvestmentCategory investmentCategory=objectMapper.readValue(request.getReader(),InvestmentCategory.class);
        investmentCategoryManager.deleteInvestmentCategory(investmentCategory.getName());
    }
    @Override
    protected void doPut(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException{
        investmentCategoryManager.updateInvestmentCategory(request.getParameter("oldname"),request.getParameter("newname"));
    }
}
