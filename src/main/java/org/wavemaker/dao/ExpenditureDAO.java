package org.wavemaker.dao;
import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.ExpenditureOperations;
import org.wavemaker.model.Expenditure;
import org.wavemaker.model.Income;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public class ExpenditureDAO implements ExpenditureOperations {
    @Override
    public void addExpenditure(Expenditure expenditure) {
        Connection connection = MySQLConnection.getConnection();
        String sql="insert into expenditure(name,category,amount,processed_date,processed_time) values(?,?,?,?,?)";
        try {
            PreparedStatement statement = connection.prepareStatement(sql);

            statement.setString(1,expenditure.getName());
            statement.setString(2,expenditure.getCategory());
            statement.setInt(3,expenditure.getAmount());
            statement.setString(4,expenditure.getProcessedDate());
            statement.setString(5,expenditure.getProcessedTime());
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't Insert into table");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void deleteExpenditure(int id){
        Connection connection=MySQLConnection.getConnection();
        String sql="delete from expenditure where id=?";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setInt(1,id);
            int result= statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't delete");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void updateExpenditure(Expenditure expenditure){
        Connection connection=MySQLConnection.getConnection();
        String sql="update expenditure set name=?, amount=?, category=? where processed_date=? and processed_time=?";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setString(1,expenditure.getName());
            statement.setInt(2,expenditure.getAmount());
            statement.setString(3, expenditure.getCategory());
            statement.setString(4,expenditure.getProcessedDate());
            statement.setString(5,expenditure.getProcessedTime());
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't Update data");
            throw new RuntimeException(e);
        }
    }
    @Override
    public List<Expenditure> getAllExpenditure(){
        List<Expenditure> expenditureList=new ArrayList<>();
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from expenditure order by processed_date desc,processed_time desc";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            ResultSet resultSet =statement.executeQuery();
            while(resultSet.next()){
                int id= resultSet.getInt("id");
                String name= resultSet.getString("name");
                String category=resultSet.getString("category");
                int amount=resultSet.getInt("amount");
                String processedDate=resultSet.getString("processed_date");
                String processedTime=resultSet.getString("processed_time");
                expenditureList.add(new Expenditure(id,name,category,amount,processedDate,processedTime));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return expenditureList;
    }

    @Override
    public List<Expenditure> searchExpenditure(String expenditureCategory) {
        List<Expenditure> searchExpenditureList=new ArrayList<>();
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from expenditure where category=? order by processed_date desc,processed_time desc";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setString(1,expenditureCategory);
            ResultSet resultSet=statement.executeQuery();
            while(resultSet.next()){
                int id= resultSet.getInt("id");
                String name= resultSet.getString("name");
                String category=resultSet.getString("category");
                int amount=resultSet.getInt("amount");
                String processedDate=resultSet.getString("processed_date");
                String processedTime=resultSet.getString("processed_time");
                searchExpenditureList.add(new Expenditure(id,name,category,amount,processedDate,processedTime));
            }
        } catch (SQLException e) {
            System.out.println("Can't search");
            throw new RuntimeException(e);
        }
        return searchExpenditureList;
    }
}
