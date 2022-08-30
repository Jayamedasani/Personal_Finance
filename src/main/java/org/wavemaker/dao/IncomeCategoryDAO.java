package org.wavemaker.dao;
import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.IncomeCategoryOperations;
import org.wavemaker.model.IncomeCategory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public class IncomeCategoryDAO implements IncomeCategoryOperations {
    @Override
    public void addIncomeCategory(String name){
        Connection connection= MySQLConnection.getConnection();
        String sql="insert into income_category(name) values(?)";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setString(1,name);
            int result=statement.executeUpdate();
            System.out.println("Category added");
        } catch (SQLException e) {
            System.out.println("Can't add category");
            throw new RuntimeException(e);
        }
    }
    @Override
    public  void deleteIncomeCategory(String name){
        Connection connection=MySQLConnection.getConnection();
        String sql="delete from income_category where name=?";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,name);
            int result=statement.executeUpdate();
            System.out.println("Category deleted");
        } catch (SQLException e) {
            System.out.println("Can't add Category");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void updateIncomeCategory(String oldName, String newName){
        Connection connection=MySQLConnection.getConnection();
        String sql="update income_category set name=? where name=?";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,newName);
            statement.setString(2,oldName);
            int result= statement.executeUpdate();
            System.out.println("Data Updated");
        } catch (SQLException e) {
            System.out.println("can't update");
            throw new RuntimeException(e);
        }
    }
    @Override
    public List<IncomeCategory> getAllIncomeCategory(){
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from income_category";
        List<IncomeCategory> incomeCategoryList=new ArrayList<>();
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            ResultSet resultSet=statement.executeQuery();
            while(resultSet.next()){
                String name=resultSet.getString("name");
                incomeCategoryList.add(new IncomeCategory(name));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return incomeCategoryList;
    }
}
