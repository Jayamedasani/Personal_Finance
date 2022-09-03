package org.wavemaker.implementation;

import org.wavemaker.model.InvestmentCategory;

import java.util.List;

public interface InvestmentCategoryOperations {
    void addInvestmentCategory(String name);
    void deleteInvestmentCategory(String name);
    void updateInvestmentCategory(String oldName,String newName);
    List<InvestmentCategory> getAllInvestmentCategory();
}
