package org.wavemaker.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.ExpenditureCategoryDAO;
import org.wavemaker.implementation.ExpenditureCategoryOperations;
import org.wavemaker.model.Expenditure;
import org.wavemaker.model.ExpenditureCategory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class ExpenditureCategoryServlet extends HttpServlet {
    ExpenditureCategoryOperations expenditureCategoryManager=new ExpenditureCategoryDAO();
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        List<ExpenditureCategory> expenditureCategoryList = expenditureCategoryManager.getAllExpenditureCategory();
        response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(expenditureCategoryList));
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        ExpenditureCategory expenditureCategory= objectMapper.readValue(request.getReader(), ExpenditureCategory.class);
        expenditureCategoryManager.addExpenditureCategory(expenditureCategory.getName());
    }
    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ExpenditureCategory expenditureCategory=objectMapper.readValue(req.getReader(),ExpenditureCategory.class);
        expenditureCategoryManager.deleteExpenditureCategory(expenditureCategory.getName());
    }
}
