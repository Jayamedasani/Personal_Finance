package org.wavemaker.dao;
import org.wavemaker.connection.MySQLConnection;
import org.wavemaker.implementation.DependentOperations;
import org.wavemaker.model.Dependent;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
public class DependentDAO implements DependentOperations {
    @Override
    public void addDependent(Dependent dependent) {
        Connection connection= MySQLConnection.getConnection();
        String sql="insert into dependent(name,email,relation,phnno,dob) values(?,?,?,?,?)";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1, dependent.getName());
            statement.setString(2, dependent.getEmail());
            statement.setString(3, dependent.getRelation());
            statement.setString(4, dependent.getPhnno());
            statement.setString(5, dependent.getDob());
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't execute query");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void deleteDependent(String userEmail) {
        Connection connection=MySQLConnection.getConnection();
        String sql="delete from dependent where email=?";
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            statement.setString(1,userEmail);
            int result=statement.executeUpdate();
            System.out.println(result+"rows effected");
        } catch (SQLException e) {
            System.out.println("Can't execute query");
            throw new RuntimeException(e);
        }
    }
    @Override
    public void updateDependent(Dependent dependent) {

    }
    @Override
    public List<Dependent> getAllDependent() {
        Connection connection=MySQLConnection.getConnection();
        String sql="select * from dependent";
        List<Dependent> dependentList=new ArrayList<>();
        try{
            PreparedStatement statement=connection.prepareStatement(sql);
            ResultSet resultSet=statement.executeQuery();
            while (resultSet.next()){
                String name=resultSet.getString("name");
                String relation= resultSet.getString("relation");
                String email=resultSet.getString("email");
                String phnno=resultSet.getString("phnno");
                String dob=resultSet.getString("dob");
                dependentList.add(new Dependent(name,relation,phnno,email,dob));
            }
        } catch (SQLException e) {
            System.out.println("Can't execute query");
            throw new RuntimeException(e);
        }
        return dependentList;
    }
}
