"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  links: {
    url: string;
    icon: React.ReactNode;
    label: string;
  }[];
}

export function ProjectCard({
  title,
  description,
  technologies,
  links,
}: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {links.map((link) => (
          <Button
            variant="outline"
            size="sm"
            className="flex gap-2"
            asChild
            key={link.url}
          >
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
              {link.label}
            </Link>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
