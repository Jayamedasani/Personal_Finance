package org.wavemaker.servlet;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.InvestmentDAO;
import org.wavemaker.implementation.InvestmentOperations;
import org.wavemaker.model.Investment;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
public class InvestmentServlet extends HttpServlet {
    private InvestmentOperations investmentManager=new InvestmentDAO();
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException, ServletException{
        List<Investment> investmentList=investmentManager.getAllInvestment();
        response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(investmentList));
    }
    @Override
    protected void doPost(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException{
        Investment investment=objectMapper.readValue(request.getReader(), Investment.class);
        investmentManager.addInvestment(investment);
    }
    @Override
    protected  void doDelete(HttpServletRequest request,HttpServletResponse response)throws IOException,ServletException{
        Investment investment=objectMapper.readValue(request.getReader(), Investment.class);
        investmentManager.deleteInvestment(investment);
    }
}
