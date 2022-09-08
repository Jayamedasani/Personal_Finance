package org.wavemaker.implementation;

import java.util.HashMap;
import java.util.Map;

public interface SavingsOperations {
    int getBalanceInMonth(int monthNumber,int yearNumber);
    Map<Integer,Integer> getCurrentBalance();
    HashMap<Integer,Integer> getYearBalance(int yearNumber);

}
