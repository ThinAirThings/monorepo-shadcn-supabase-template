'use client';

import { Button } from '@thinair-monorepo-template/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@thinair-monorepo-template/ui/components/card';
import { Input } from '@thinair-monorepo-template/ui/components/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@thinair-monorepo-template/ui/components/form';
import { signup } from '../actions';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@thinair-monorepo-template/ui/hooks/use-toast';
import { Alert, AlertDescription } from "@thinair-monorepo-template/ui/components/alert";
import { Info } from "lucide-react";
import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";

const signupSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupValues = z.infer<typeof signupSchema>;

const GetInviteDetailsQuery = graphql(`
  query GetInviteDetails($token: String!) {
    organizationInvitesCollection(filter: { token: { eq: $token } }) {
      edges {
        node {
          id
          email
          role
          organizationName
        }
      }
    }
  }
`);


export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const inviteToken = searchParams.get('inviteToken');
  const { toast } = useToast();
  
  const { data: inviteData } = useQuery(GetInviteDetailsQuery, {
    variables: { token: inviteToken ?? '' },
    skip: !inviteToken,
  });

  const inviteDetails = inviteData?.organizationInvitesCollection?.edges?.[0]?.node;

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignupValues) => {
    try {
      setIsLoading(true);
      const result = await signup(data);
      
      if (result.error) {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
        return;
      }

      if (result.success) {
        toast({
          title: 'Success',
          description: 'Account created successfully!',
        });
        
        // If we have an invite token, redirect to the invite API endpoint
        if (inviteToken) {
          router.push(`/api/invites/${inviteToken}`);
        } else {
          router.push('/dashboard');
        }
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {inviteToken ? `Join ${inviteDetails?.organizationName ?? 'Organization'}` : 'Create an account'}
        </CardTitle>
        <CardDescription className="text-center">
          {inviteToken 
            ? 'Create a new account to join as a team member'
            : 'Enter your email and password to create your account'
          }
        </CardDescription>
      </CardHeader>

      {inviteToken && inviteDetails && (
        <div className="mb-6 w-full">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription className="space-y-2">
              <p>
                Sign up with <span className="font-medium">{inviteDetails.email}</span> to join{' '}
                <span className="font-medium">{inviteDetails.organizationName}</span> as 
                a {inviteDetails.role.toLowerCase()}.
              </p>
              <p className="text-sm text-muted-foreground">
                Already have an account? You can{' '}
                <Link 
                  href={`/login?inviteToken=${inviteToken}`}
                  className="text-primary hover:text-primary/80 underline"
                >
                  sign in here
                </Link>
                .
              </p>
            </AlertDescription>
          </Alert>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="example@example.com" 
                      disabled={isLoading}
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="Create a password"
                      disabled={isLoading}
                      className="bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <CardFooter className="flex flex-col space-y-4 px-0 mt-4">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
            <div className="text-sm text-center text-muted-foreground">
              Already have an account?{' '}
              <Link 
                href={inviteToken ? `/login?inviteToken=${inviteToken}` : '/login'}
                className="text-primary hover:text-primary/80"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Form>
    </>
  );
}
