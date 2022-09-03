package org.wavemaker.servlet;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.IncomeCategoryDAO;
import org.wavemaker.implementation.IncomeCategoryOperations;
import org.wavemaker.model.IncomeCategory;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class IncomeCategoryServlet extends HttpServlet {
    IncomeCategoryOperations incomeCategoryManager=new IncomeCategoryDAO();
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        List<IncomeCategory> incomeCategoryList = incomeCategoryManager.getAllIncomeCategory();
        response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(incomeCategoryList));
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        IncomeCategory incomeCategory= objectMapper.readValue(request.getReader(), IncomeCategory.class);
        incomeCategoryManager.addIncomeCategory(incomeCategory.getName());
    }
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        IncomeCategory incomeCategory= objectMapper.readValue(request.getReader(), IncomeCategory.class);
        incomeCategoryManager.deleteIncomeCategory(incomeCategory.getName());
    }
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
        incomeCategoryManager.updateIncomeCategory(request.getParameter("oldname"),request.getParameter("newname"));
    }
}
