# syntax=docker/dockerfile:1
# check=error=true

# This Dockerfile is designed for production, not development.
# docker build -t app .
# docker run -d -p 80:80 -e RAILS_MASTER_KEY=<value from config/master.key> --name app app

# For a containerized dev environment, see Dev Containers: https://guides.rubyonrails.org/getting_started_with_devcontainer.html

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version
FROM ruby:3.3.0-slim

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy Gemfile and Gemfile.lock first
COPY Gemfile Gemfile.lock ./

# Install gems
RUN bundle install

# Copy the rest of the application
COPY . .

CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"]
