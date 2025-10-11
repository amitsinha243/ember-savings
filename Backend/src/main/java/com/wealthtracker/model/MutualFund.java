package com.wealthtracker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "mutual_funds")
public class MutualFund {
    @Id
    private String id;
    
    private String userId;
    private String fundName;
    private String schemeName;
    private Double units;
    private Double nav;
    private LocalDateTime purchaseDate;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    public MutualFund() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
