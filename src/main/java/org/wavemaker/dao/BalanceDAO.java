package org.wavemaker.dao;

import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.BalanceOperations;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class BalanceDAO implements BalanceOperations {
    @Override
    public Map<String, Integer> getMonthExpenditure(int month, int year) {
        Connection connection= MySQLConnection.getConnection();
        Map<String,Integer> expenditureMap=new HashMap<>();
        String sql="select category,sum(amount) as amount from expenditure where month(processed_date)=? and year(processed_date)=? group by(category)";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
                statement.setInt(1,month);
                statement.setInt(2,year);
                ResultSet resultSet=statement.executeQuery();
                while (resultSet.next()) {
                    expenditureMap.put(resultSet.getString("category"),resultSet.getInt("amount"));
                }
        } catch (SQLException e) {
            System.out.println("Can't execute query");
            throw new RuntimeException(e);
        }
        return expenditureMap;
    }
    @Override
    public Map<String, Integer> getMonthIncome(int month, int year) {
        Connection connection= MySQLConnection.getConnection();
        Map<String,Integer> expenditureMap=new HashMap<>();
        String sql="select category,sum(amount) as amount from income where month(processed_date)=? and year(processed_date)=? group by(category)";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setInt(1,month);
            statement.setInt(2,year);
            ResultSet resultSet=statement.executeQuery();
            while (resultSet.next()) {
                expenditureMap.put(resultSet.getString("category"),resultSet.getInt("amount"));
            }
        } catch (SQLException e) {
            System.out.println("Can't execute query");
            throw new RuntimeException(e);
        }
        return expenditureMap;
    }
}
