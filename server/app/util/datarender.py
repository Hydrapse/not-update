def render_user_base_info(user):
    return {
        'name': user.name,
        'id': str(user.id),
        'avatar': user.avatar,
        'bio': user.bio,
        'user_id': user.user_id,
    }
