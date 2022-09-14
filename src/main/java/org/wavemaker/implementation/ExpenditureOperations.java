package org.wavemaker.implementation;
import org.wavemaker.model.Expenditure;

import java.util.List;

public interface ExpenditureOperations {
    void addExpenditure(Expenditure expenditure);
    void deleteExpenditure(int id);
    void updateExpenditure(Expenditure expenditure);
    List<Expenditure> getAllExpenditure();
    List<Expenditure> searchExpenditure(String expenditureCategory);
}
