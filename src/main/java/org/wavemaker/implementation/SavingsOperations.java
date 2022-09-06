package org.wavemaker.implementation;

import java.util.HashMap;

public interface SavingsOperations {
    int getBalanceInMonth(int monthNumber,int yearNumber);
    int getCurrentBalance();
    HashMap<Integer,Integer> getYearBalance(int yearNumber);

}
