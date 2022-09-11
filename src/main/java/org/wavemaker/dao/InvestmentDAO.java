package org.wavemaker.dao;

import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.InvestmentOperations;
import org.wavemaker.model.Investment;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class InvestmentDAO implements InvestmentOperations {
    @Override
    public void addInvestment(Investment investment) {
        Connection connection= MySQLConnection.getConnection();
        String sql="insert into investment(name,category,amount,expiryyear,starteddate) values(?,?,?,?,?,)";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setString(1,investment.getName());
            statement.setString(2,investment.getCategory());
            statement.setInt(3,investment.getAmount());
            statement.setInt(4,investment.getYear());
            statement.setString(5,investment.getStartDate());
            statement.execute();
            System.out.println("rows effected");
        } catch (SQLException e) {
            System.out.println("can't add investment");
            e.printStackTrace();
        }
    }

    @Override
    public void deleteInvestment(Investment investment) {
        Connection connection=MySQLConnection.getConnection();
        String sql="delete from investment where name=? and starteddate=?";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,investment.getName());
            statement.setString(2,investment.getStartDate());
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("can't delete investment");
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Investment> getAllInvestment() {
        List<Investment> investmentList=new ArrayList<>();
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from investment";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            ResultSet resultSet=statement.executeQuery();
            while(resultSet.next()){
                String name=resultSet.getString("name");
                String category=resultSet.getString("category");
                int amount=resultSet.getInt("amount");
                int year=resultSet.getInt("expiryyear");
                String date=resultSet.getString("starteddate");
                investmentList.add(new Investment(name,category,date,amount,year));
            }
        } catch (SQLException e) {
            System.out.println("can't get investments");
            throw new RuntimeException(e);
        }
        return investmentList;
    }

    @Override
    public void updateInvestment(Investment investment) {

    }
}
