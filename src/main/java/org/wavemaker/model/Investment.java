package org.wavemaker.model;

import java.util.Objects;

public class Investment {
    private String name,category,startDate;
    private int amount,year;

    public Investment() {
    }

    public Investment(String name, String category, String startDate, int amount, int year) {
        this.name = name;
        this.category = category;
        this.startDate = startDate;
        this.amount = amount;
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Investment that = (Investment) o;
        return amount == that.amount && year == that.year && Objects.equals(name, that.name) && Objects.equals(category, that.category) && Objects.equals(startDate, that.startDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, category, startDate, amount, year);
    }

    @Override
    public String toString() {
        return "Investment{" +
                "name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", startDate='" + startDate + '\'' +
                ", amount=" + amount +
                ", year=" + year +
                '}';
    }
}
