# Basic go commands
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get

# Binary names
TARGET = GoBot

SRCDIR = ./src
BINDIR = ./bin


.PHONY : all build clean run

all : clean build run

build :
	mkdir -p $(BINDIR)
	$(GOBUILD) -o $(BINDIR)/$(TARGET) -v $(SRCDIR)/

clean : 
	$(GOCLEAN) 
	rm -rf $(BINDIR)/*

run :
	$(BINDIR)/$(TARGET)

test :
	$(GOTEST) -v $(SRCDIR)/... 
