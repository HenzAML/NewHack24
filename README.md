# Pet Guard: For Well-Being of Your Pet 

## Overview
This repository contains the development of a privacy-focused application aimed at securely sharing specific pet health information with authorized parties such as veterinarians. The application is designed with encryption and cybersecurity as core themes, allowing pet owners to manage their pet's health data with selective access controls and data revocation capabilities.

## Features
- Selective Data Sharing: Pet owners can share specific health information (e.g., vaccination records) only when needed, maintaining privacy over other sensitive data.
- Security and Encryption: The app integrates encryption protocols to protect all shared data, ensuring that only authorized users with password-based access can view it.
- Instant Data Revocation: Owners can revoke data access at any time, with an audit log to track who accessed which information and when.


## File Structure
The repo is structured as:
- `backend` contains the server-side code responsible for encryption, data management, and handling secure API calls.
- `frontend` contains the user interface allowing pet owners to manage data sharing settings, view access logs, and grant or revoke permissions.
- `scripts` includes scripts for encryption algorithm setup, testing, and security checks.
