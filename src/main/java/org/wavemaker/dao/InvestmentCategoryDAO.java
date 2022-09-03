package org.wavemaker.dao;

import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.InvestmentCategoryOperations;
import org.wavemaker.model.InvestmentCategory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class InvestmentCategoryDAO implements InvestmentCategoryOperations {
    @Override
    public void addInvestmentCategory(String name) {
        Connection connection= MySQLConnection.getConnection();
        String sql="insert into investmentcategory(name) values(?)";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,name);
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can,t add category");
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteInvestmentCategory(String name) {
        Connection connection= MySQLConnection.getConnection();
        String sql="delete from investmentcategory where name=?";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,name);
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can,t add category");
            throw new RuntimeException(e);
        }
    }

    @Override
    public void updateInvestmentCategory(String oldName, String newName) {
        Connection connection = MySQLConnection.getConnection();
        String sql = "update investmentcategory set name=? where name=?";
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, newName);
            statement.setString(2, oldName);
            int result = statement.executeUpdate();
            System.out.println(result + "rows effected");
        } catch (SQLException e) {
            System.out.println("Can,t add category");

        }
    }
    @Override
    public List<InvestmentCategory> getAllInvestmentCategory() {
        Connection connection = MySQLConnection.getConnection();
        List<InvestmentCategory> investmentCategoryList=new ArrayList<>();
        String sql="select * from investmentcategory";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            ResultSet resultSet=statement.executeQuery();
            while (resultSet.next()) {
                String name = resultSet.getString("name");
                investmentCategoryList.add(new InvestmentCategory(name));
            }
        } catch (SQLException e) {
            System.out.println("can't get details");
            throw new RuntimeException(e);
        }
        return investmentCategoryList;
    }
}
