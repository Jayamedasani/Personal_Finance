package org.wavemaker.dao;
import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.IncomeOperations;
import org.wavemaker.model.Income;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public class IncomeDAO implements IncomeOperations {
    @Override
    public void addIncome(Income income) {
        Connection connection = MySQLConnection.getConnection();
        String sql="insert into income(name,category,amount,processed_date,processed_time) values(?,?,?,?,?)";
        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1,income.getName());
            statement.setString(2,income.getCategory());
            statement.setInt(3,income.getAmount());
            statement.setString(4,income.getProcessedDate());
            statement.setString(5,income.getProcessedTime());
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't Insert into Income table");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void deleteIncome(int id){
        Connection connection=MySQLConnection.getConnection();
        String sql="delete from income where id=?";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setInt(1,id);
            int result= statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't delete from Income");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void updateIncome(Income income){
        Connection connection=MySQLConnection.getConnection();
        String sql="update income set name=?, amount=?, category=? where id=?";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setString(1,income.getName());
            statement.setInt(2,income.getAmount());
            statement.setString(3, income.getCategory());
            statement.setInt(4,income.getId());
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't Update Income data");
            throw new RuntimeException(e);
        }
    }
    @Override
    public List<Income> getAllIncome(){
        List<Income> incomeList=new ArrayList<>();
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from income order by processed_date desc,processed_time desc";
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
                incomeList.add(new Income(id,name,category,amount,processedDate,processedTime));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return incomeList;
    }
    @Override
    public List<Income> searchIncome(String incomeCategory) {
        List<Income> searchIncomeList=new ArrayList<>();
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from income where category=? order by processed_date desc,processed_time desc";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setString(1,incomeCategory);
            ResultSet resultSet=statement.executeQuery();
            while(resultSet.next()){
                int id=resultSet.getInt("id");
                String name= resultSet.getString("name");
                String category=resultSet.getString("category");
                int amount=resultSet.getInt("amount");
                String processedDate=resultSet.getString("processed_date");
                String processedTime=resultSet.getString("processed_time");
                searchIncomeList.add(new Income(id,name,category,amount,processedDate,processedTime));
            }
        } catch (SQLException e) {
            System.out.println("Can't search");
            throw new RuntimeException(e);
        }
        return searchIncomeList;
    }
}
