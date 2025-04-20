imagine a scenario, where i ask you to integrate an API in @iee/apps/admin (workflow is same for both admin/web):
 

Integrate this API in my dashboard page so that the page renders cards of all data from the API whose curl I'll provide you next:
```
curl -X 'GET' 'https://api-master.dev.iee.dev/institution-integration' -H 'accept: /' -H 'Authorization: Bearer <TOKEN>
```

Here's the sample response:
```json
{
  "data": {
    "integrations": [
      {
        "name": "Slate Setup",
        "description": "Integration with Slate Setup for seamless data exchange and management",
        "slug": "slate-setup",
        "image": {
          "fileId": "674419a8988812180f2cbc89",
          "key": "7yQcx7MktFnFeShaZ2tExB",
          "originalKey": "slate-logo.png",
          "cdnUrl": "https://d1nhor6uou2cnk.cloudfront.net/slate-logo.png"
        },
        "id": "674edef163991c887ac2642e"
      }
    ]
  },
  "message": "Success"
}
```
### **Things to remember before you start answering** 
- Reuse existing interfaces if the desired interface is already defined elsewhere
- import & extend IDocument from @common.ts since to avoid redeclaring id, createdAt, updatedAt & deletedAt fields in an interface


### **Your workflow should be like this** 

1. Type Definitions for API Requests (/apps/{admin or web}/src/types/requests/module.types.ts)
```ts

// Define interface for API request
export interface DataTypeForApiRequest extends IDocument {
  // ... other fields
}
```

2. Type Definitions for API Responses (/apps/{admin or web}/src/types/entities/module.types.ts)
```ts

// Define interface for API response
export interface DataTypeForApiResponse extends IDocument {
  // ... other fields
}
```


3. Now you should be able to write the API function in its respective .requests.ts file, for example:
```ts
// read endpoint's base URL to find the correct environment variables in .env file. 
// If you cannot find any env variable which matches with the endpoint base URL in the prompt's curl, then create a new env variable in the appropriate .env file
export const MASTER_SERVICE_URL = import.meta.env.VITE_PUBLIC_MASTER_SERVICE_URL;

export const getInstitutionIntegrationsRequest = async () =>
  http.get<ApiResponse<{ integrations: InstitutionIntegration[] }>>('/institution-integration', {
    baseURL: MASTER_SERVICE_URL,
  });
  ```
  
then write the reusable react query hook in .queries.ts file, example:  
  ```ts
  export const useInstitutionIntegrations = () => useQuery({
    queryKey: ['institution-integrations'],
    queryFn: async () => {
      const res = await getInstitutionIntegrationsRequest();
      return res.data.integrations;
    },
  });

export const useCreateInstitutionIntegration = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ICreateEditInstitutionIntegrationRequest) => {
      const res = await createInstitutionIntegration(data);
      return res.data.integration;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['institution-integrations'] });
    },
    onError: onApiError,
  });
};
```

and then use the hook in my component like this:  
```tsx
// ... existing code
const institutionIntegrations = useInstitutionIntegrations();
// ... existing code
return (
    <div className="m-4 space-y-4 border bg-white p-4">
        {institutionIntegrations.data?.map((integration) => (
          <IntegrationCard
            key={integration.id}
            integration={integration}
            onToggle={handleToggle}
            onDelete={handleDeleteClick}
          />
        ))}
    </div>
)
     
```

