package org.wavemaker.dao;
import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.SavingsOperations;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

public class SavingsDAO implements SavingsOperations {
    @Override
    public int getBalanceInMonth(int monthNumber, int yearNumber) {
        int income=getIncome(monthNumber,yearNumber);
        int expenditure=getExpenditure(monthNumber,yearNumber);
        int result=income-expenditure;
        return result;
    }
    @Override
    public Map<Integer,Integer> getCurrentBalance() {
        Map<Integer,Integer> result=new HashMap<>();
        LocalDateTime current = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM");
        String currentMonth = current.format(formatter);
        int month;
        if(currentMonth.charAt(0)=='0'){
            month=Integer.parseInt(String.valueOf(currentMonth.charAt(1)));
        }
        else{
            month=Integer.parseInt(currentMonth);
        }
        DateTimeFormatter formatterYear = DateTimeFormatter.ofPattern("yyyy");
        String currentYear = current.format(formatterYear);
        int year=Integer.parseInt(currentYear);
        int income=getIncome(month,year);
        int expenditure=getExpenditure(month,year);
        result.put(1,income);
        result.put(2,expenditure);
        int balance=income-expenditure;
        result.put(3,balance);
        return result;
    }
    @Override
    public HashMap<Integer, Integer> getYearBalance(int yearNumber) {
        HashMap<Integer,Integer> yearMonthBalance=new HashMap<>();
        for(int i=1;i<=12;i++){
            int income=getIncome(i,yearNumber);
            int expenditure=getExpenditure(i,yearNumber);
            int result=income-expenditure;
            yearMonthBalance.put(i,result);
        }
        return yearMonthBalance;
    }
    public int getIncome(int month,int year){
        Connection connection=MySQLConnection.getConnection();
        int income=0;
        String sqlIncome="select sum(amount) from income where MONTH(processed_date)=? and YEAR(processed_date)=?";
        try{
            PreparedStatement statementIncome=connection.prepareStatement(sqlIncome);
            statementIncome.setInt(1,month);
            statementIncome.setInt(2,year);
            ResultSet resultSetIncome=statementIncome.executeQuery();
            while(resultSetIncome.next()) {
                income = resultSetIncome.getInt("sum(amount)");
            }
        } catch (SQLException e) {
            System.out.println("can't get details");
            e.printStackTrace();
        }
        return income;
    }
    public int getExpenditure(int month,int year){
        Connection connection=MySQLConnection.getConnection();
        int expenditure=0;
        String sqlIncome="select sum(amount) from expenditure where MONTH(processed_date)=? and YEAR(processed_date)=?";
        try{
            PreparedStatement statementIncome=connection.prepareStatement(sqlIncome);
            statementIncome.setInt(1,month);
            statementIncome.setInt(2,year);
            ResultSet resultSetIncome=statementIncome.executeQuery();
            while(resultSetIncome.next()) {
                expenditure = resultSetIncome.getInt("sum(amount)");
            }
        } catch (SQLException e) {
            System.out.println("can't get details");
            e.printStackTrace();
        }
        return expenditure;
    }
}
