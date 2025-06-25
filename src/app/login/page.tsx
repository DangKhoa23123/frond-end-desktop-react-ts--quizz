"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";


export default class LoginScreen extends React.Component {
  render() {
    return (
      <div className="items-center justify-center h-screen bg-gray-100">
        <div>
          <Input type="text" placeholder="Email or Phone" />
        </div>
        <div>
          <Input type="password" placeholder="Password" />
        </div>
        <Button> Submit</Button>
      </div>
    );
  }
}
