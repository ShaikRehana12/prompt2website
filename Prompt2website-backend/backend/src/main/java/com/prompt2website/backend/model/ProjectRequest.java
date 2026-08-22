package com.prompt2website.backend.model;

public class ProjectRequest {
    private String prompt;
    private String frontend;
    private String backend;
    private String database;

    // Getters and Setters
    public String getPrompt() { return prompt; }
    public void setPrompt(String prompt) { this.prompt = prompt; }

    public String getFrontend() { return frontend; }
    public void setFrontend(String frontend) { this.frontend = frontend; }

    public String getBackend() { return backend; }
    public void setBackend(String backend) { this.backend = backend; }

    public String getDatabase() { return database; }
    public void setDatabase(String database) { this.database = database; }
}