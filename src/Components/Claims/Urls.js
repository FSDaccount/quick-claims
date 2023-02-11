urlpatterns = [
    path('claim/', views.claims, name='claims'),
    path('claim/<int:claim_id>', views.claim, name='claim'),
]