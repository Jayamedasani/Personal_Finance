package org.wavemaker;
import org.wavemaker.dao.*;
import org.wavemaker.model.Expenditure;
import org.wavemaker.model.ExpenditureCategory;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ExpenditureDAO expenditureDAO=new ExpenditureDAO();
        List<Expenditure> list=new ArrayList<>();
        list=expenditureDAO.getAllExpenditure();
        for(Expenditure expenditure:list){
            System.out.println(expenditure);
        }

    }
}