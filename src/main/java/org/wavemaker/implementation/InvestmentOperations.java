package org.wavemaker.implementation;

import org.wavemaker.model.Investment;

import java.util.List;

public interface InvestmentOperations {
    void addInvestment(Investment investment);
    void deleteInvestment(Investment investment);
    List<Investment> getAllInvestment();
    void updateInvestment(Investment investment);
}
