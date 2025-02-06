module Api
  module V1
    class HealthController < ApplicationController
      def index
        render json: { status: 'ok', message: 'Backend is running!' }
      end
    end
  end
end 