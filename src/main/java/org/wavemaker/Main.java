package org.wavemaker;
import org.wavemaker.dao.*;
import org.wavemaker.model.Dependent;
import org.wavemaker.model.Expenditure;
import org.wavemaker.model.ExpenditureCategory;
import org.wavemaker.model.Investment;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
//        DependentDAO dao=new DependentDAO();
//        List<Dependent> list=new ArrayList<>();
//        list=dao.getAllDependent();
//        for (Dependent dependent:list){
//            System.out.println(dependent);
//        }
        /*Map<Integer,String> map=new HashMap<>();
        BalanceDAO balanceDAO=new BalanceDAO();
        map=balanceDAO.getMonthMaxExpenditure(2022);
        System.out.println(map);*/
        InvestmentDAO investmentDAO=new InvestmentDAO();
        investmentDAO.addInvestment(new Investment("vjwland","stocks","2016-03-08",10000,2050));
    }
}