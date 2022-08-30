package org.wavemaker.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConnection {
    private static String host = "jdbc:mysql://localhost:3306/personalfinance";
    private static String userName = "root";
    private static String password = "Pramati@123";

    private static volatile Connection connection;

    public static Connection getConnection() {
        if(connection == null) {
            try {
               Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection(host, userName, password);
            } catch (SQLException e) {
                e.printStackTrace();
                System.out.println("SQL Exception while Creating Mysql Connection " + host + " With User " + userName);
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
        }
        return connection;
    }
}
