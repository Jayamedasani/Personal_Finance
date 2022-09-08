package org.wavemaker.implementation;


import java.util.Map;

public interface BalanceOperations {
    Map<String,Integer> getMonthExpenditure(int month, int year);
    Map<String,Integer> getMonthIncome(int month, int year);
    Map<Integer,String> getMonthMaxExpenditure( int year);

}
