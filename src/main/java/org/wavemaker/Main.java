package org.wavemaker;
import org.wavemaker.dao.*;

import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        SavingsDAO savingsDAO=new SavingsDAO();
        HashMap<Integer,Integer> map=new HashMap<>();
        map=savingsDAO.getYearBalance(2022);
        System.out.println(map);
    }
}