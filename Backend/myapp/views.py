from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
credentialList = ['peter.parker@zylker.com','Password123$789']

def send_json_data(request):
    data = {
        'email': credentialList[0],
        'password': credentialList[1],
        'code': 200
    }
    return JsonResponse(data)

@csrf_exempt
def process_post_request(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            credentialList[1] = data['newPassword']
            response_data = {
                'status': 'success',
                'message': 'Data received successfully',
                'data': data,
                'new Password': credentialList[1]
            }

            # Return a JSON response
            return JsonResponse(response_data)
        
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid JSON'}, status=400)
        
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
    
    else:
        return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed'}, status=405)
