FROM mcr.microsoft.com/dotnet/sdk:7.0.405-alpine3.18 AS build
WORKDIR /app

COPY ./API/*.csproj ./
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/nightly/sdk:8.0-alpine3.19 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

CMD ["dotnet", "API.dll"]