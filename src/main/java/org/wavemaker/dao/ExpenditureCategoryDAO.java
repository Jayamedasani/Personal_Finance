package org.wavemaker.dao;
import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.ExpenditureCategoryOperations;
import org.wavemaker.model.ExpenditureCategory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public class ExpenditureCategoryDAO implements ExpenditureCategoryOperations {
    @Override
    public void addExpenditureCategory(String expenditureName) {
        Connection connection= MySQLConnection.getConnection();
        String sql="insert into expenditure_category(name) values(?)";
        try{
            PreparedStatement statement= connection.prepareStatement(sql);
            statement.setString(1,expenditureName);
            int result=statement.executeUpdate();
            System.out.println("Category added");
        } catch (SQLException e) {
            System.out.println("Can't add category");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void deleteExpenditureCategory(String expenditureName) {
        Connection connection=MySQLConnection.getConnection();
        String sql="delete from expenditure_category where name=?";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,expenditureName);
            int result=statement.executeUpdate();
            System.out.println("Category deleted");
        } catch (SQLException e) {
            System.out.println("Can't add Category");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void updateExpenditureCategory(String oldExpenditureCategoryName, String updatedExpenditureCategoryName) {
        Connection connection=MySQLConnection.getConnection();
        String sql="update expenditure_category set name=? where name=?";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,updatedExpenditureCategoryName);
            statement.setString(2,oldExpenditureCategoryName);
            int result= statement.executeUpdate();
            System.out.println("Data Updated");
        } catch (SQLException e) {
            System.out.println("can't update");
            throw new RuntimeException(e);
        }
    }
    @Override
    public List<ExpenditureCategory> getAllExpenditureCategory() {
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from expenditure_category";
        List<ExpenditureCategory> expenditureCategoryList=new ArrayList<>();
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            ResultSet resultSet=statement.executeQuery();
            while(resultSet.next()){
                String name=resultSet.getString("name");
                expenditureCategoryList.add(new ExpenditureCategory(name));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return expenditureCategoryList;
    }
}
