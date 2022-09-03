package org.wavemaker.implementation;
import org.wavemaker.model.Dependent;
import java.util.List;
public interface DependentOperations {
    void addDependent(Dependent dependent);
    void deleteDependent(String userEmail);
    void updateDependent(Dependent dependent);
    List<Dependent> getAllDependent();
}
