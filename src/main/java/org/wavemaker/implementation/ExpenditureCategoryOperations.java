package org.wavemaker.implementation;
import org.wavemaker.model.ExpenditureCategory;
import java.util.List;
public interface ExpenditureCategoryOperations {
    void addExpenditure(String expenditureName);
    void deleteExpenditure(String expenditureName);
    void updateExpenditure(String oldExpenditureCategoryName,String updatedExpenditureCategoryName);
    List<ExpenditureCategory> getAllExpenditure();
}
