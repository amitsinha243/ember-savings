package com.wealthtracker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "expenses")
public class Expense {
    @Id
    private String id;
    
    private String userId;
    private String category;
    private Double amount;
    private LocalDateTime date;
    private String description;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    public Expense() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
