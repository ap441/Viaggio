"use client";

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"; // Adjust the path as needed
import { Button } from "../components/ui/button"; // Adjust the path as needed
import { User, Mail, Pencil } from "lucide-react";

export default function AccountPage() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
      if (!userId) {
        console.error('User ID not found');
        return;
      }

      try {
        const response = await fetch('/api/user', {
          headers: {
            'Authorization': userId, 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Account Details</CardTitle>
            <CardDescription>Your personal information and account details</CardDescription>
          </div>
          <Button variant="outline" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">First Name</p>
              <p className="font-medium">{userData.firstName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Last Name</p>
              <p className="font-medium">{userData.lastName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Email Address</p>
              <p className="font-medium">{userData.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
