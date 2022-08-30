package org.wavemaker;
import org.wavemaker.dao.*;
public class Main {
    public static void main(String[] args) {
        SavingsDAO savingsDAO=new SavingsDAO();
        int balance=savingsDAO.getCurrentBalance();
        System.out.println(balance);
    }
}