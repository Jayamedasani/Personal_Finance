package org.wavemaker.model;

import java.util.Objects;

public class Dependent {
    private String name,relation,phnno,email,dob;

    public Dependent() {
    }

    public Dependent(String name, String relation, String phnno, String email, String dob) {
        this.name = name;
        this.relation = relation;
        this.phnno = phnno;
        this.email = email;
        this.dob = dob;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelation() {
        return relation;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public String getPhnno() {
        return phnno;
    }

    public void setPhnno(String phnno) {
        this.phnno = phnno;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dependent dependent = (Dependent) o;
        return Objects.equals(name, dependent.name) && Objects.equals(relation, dependent.relation) && Objects.equals(phnno, dependent.phnno) && Objects.equals(email, dependent.email) && Objects.equals(dob, dependent.dob);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, relation, phnno, email, dob);
    }

    @Override
    public String toString() {
        return "Dependent{" +
                "name='" + name + '\'' +
                ", relation='" + relation + '\'' +
                ", phnno='" + phnno + '\'' +
                ", email='" + email + '\'' +
                ", dob='" + dob + '\'' +
                '}';
    }
}
