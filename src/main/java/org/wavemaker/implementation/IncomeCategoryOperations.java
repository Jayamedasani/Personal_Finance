package org.wavemaker.implementation;

import org.wavemaker.model.IncomeCategory;

import java.util.List;

public interface IncomeCategoryOperations {
    void addIncomeCategory(String incomeCategoryName);
    void deleteIncomeCategory(String incomeCategoryName);
    void updateIncomeCategory(String oldIncomeCategoryName, String newIncomeCategoryName);
    List<IncomeCategory> getAllIncomeCategory();
}
