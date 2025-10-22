# Day1: WSL Ubuntu Setup & Basic Python/CLI Practice

## Objective
- Set up WSL Ubuntu in VS Code  
- Install essential tools: Python, Git, curl, net-tools, nano  
- Create a project folder  
- Run a simple Python script  
- Practice basic Linux CLI commands  

---

## Step 1: Update & Upgrade Ubuntu
Update the package lists and upgrade installed packages to the latest version.

```bash
sudo apt update
sudo apt upgrade -y
```
## Step 2: Install Required Tools

Install Python, pip, Git, curl, net-tools, and nano editor.
```
sudo apt install -y python3 python3-pip git curl net-tools nano
```

## Step 3: Create and navigate to a new folder

```
mkdir w5d1
cd w5d1
```

## Step 4: Create a Python Script
```
echo 'print("Hello from WSL Ubuntu!")' > hello.py
```

## Step 5: Run the Python Script
```
python3 hello.py
```
*Expected output:*

**Hello from WSL Ubuntu!**

## Step 6: Practice Basic Linux CLI Commands
```
# List files
ls
ls -la

# Show current directory
pwd

# Create a new folder
mkdir testdir
cd testdir

# Create a new file
touch test.txt

# Edit the file
nano test.txt
# Save and exit: Ctrl+O, Ctrl+X

# Remove file
rm test.txt

# Change file permissions
chmod 755 ../hello.py

# Go back to project folder
cd ..
```

![alt text](<Screenshot 2025-10-22 214050.png>)

![alt text](<Screenshot 2025-10-22 214011.png>)

![alt text](<Screenshot 2025-10-22 220512.png>)

![alt text](<Screenshot 2025-10-22 220638.png>)

## Step 7: Verify Installed Tools
```
python3 --version
git --version
curl --version
ifconfig   
```

![alt text](<Screenshot 2025-10-22 214708.png>)

## Step 8: Test sudo
```
sudo whoami
```

![alt text](<Screenshot 2025-10-22 221108.png>)

